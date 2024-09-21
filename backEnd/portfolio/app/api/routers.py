from ninja import NinjaAPI, Router

# Create a single router instance to be shared across APIs
router = Router()

# Define the NinjaAPI and attach the router
api = NinjaAPI()
api.add_router("v1/", router)
