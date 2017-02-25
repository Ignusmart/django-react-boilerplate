from django.shortcuts import render

def index(request):
    context = {'container':'FirstContainer', 'page_title':'First Container'}
    return render(request, 'index.html', context=context)