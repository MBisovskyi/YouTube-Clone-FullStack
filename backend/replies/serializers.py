from rest_framework import serializers
from .models import Comment
from .models import User


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text', 'user', 'comment', 'comment_id']