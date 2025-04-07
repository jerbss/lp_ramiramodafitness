from django.shortcuts import render

def index(request):
    """View para a página inicial da Ramira Moda Fitness"""
    return render(request, 'main/index.html')
