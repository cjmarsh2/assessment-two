from django.shortcuts import render
from django.views.generic.edit import CreateView
from .models import Item

# Create your views here.
def index(request):
    item_list = Item.objects.all()
    print(item_list)
    return render(request, 'index.html', {'item_list': item_list})

class ItemCreate(CreateView):
    model = Item
    fields = '__all__'
    success_url = '/'