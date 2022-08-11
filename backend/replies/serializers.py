from rest_framework import serializers
from .models import Comment
from .models import User


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        model = User
        fields = ['id', 'text', 'user', 'user_id', 'comment', 'comment_id']