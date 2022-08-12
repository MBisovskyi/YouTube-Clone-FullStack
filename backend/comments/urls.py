from django.urls import path, include
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_comments),
    path('all/<str:video_id>/', views.video_comments),
    path('<int:comment_id>/update/', views.comment_by_id),
]