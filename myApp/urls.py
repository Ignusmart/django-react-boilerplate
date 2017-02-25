from django.conf.urls import url

from . import views

urlpatterns = [
    # ex: /polls/
    url(r'^first$', views.first_container, name='first_container'),
    url(r'^second$', views.second_container, name='second_container'),
]