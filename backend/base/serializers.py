from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, User
from rest_framework_simplejwt.tokens import RefreshToken



# https://docs.djangoproject.com/en/4.0/ref/contrib/auth/
class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id','_id','username', 'email', 'name', 'isAdmin']
    
    def get__id(self, obj):
        return obj.id
    
    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_name(self, obj):
        # if user doesn't have a name, use email
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id','_id','username', 'email', 'name', 'isAdmin', 'token']
    
    # 
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

# wrap product model into json format
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'