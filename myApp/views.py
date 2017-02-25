from django.shortcuts import render

def first_container(request):
    context = {'container':'FirstContainer', 'page_title':'First Container'}
    return render(request, 'index.html', context=context)

def second_container(request):
    context = {'container':'SecondContainer', 'page_title':'Second Container'}
    return render(request, 'index.html', context=context)