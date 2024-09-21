from ..routers import router


@router.get("/hello")
def hello(request):
    return "Hello Rajiv"