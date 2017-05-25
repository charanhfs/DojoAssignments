from django.shortcuts import render, HttpResponse
# the index function is called when root is visited
def index(request):
    print("*"*10)
    return render(request, "first_app/index.html")
