defmodule Time_managerWeb.Router do
  use Time_managerWeb, :router
  alias Time_manager.UserController
  alias Time_manager.WorkingTimeController
  alias Time_manager.ClockController

  pipeline :api do
    plug(:accepts, ["json"])
    plug(CORSPlug, origin: "localhost:5173")
  end

  pipeline :browser do
    # Add any other formats you need
    plug(:accepts, ["html", "json"])
    # Add other plugs like :fetch_session, :fetch_flash, etc.
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:time_manager, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).

    scope "/api" do
      pipe_through(:api)

      # User routes
      get("/users", UserController, :index)
      get("/users/:id", UserController, :show)
      post("/users", UserController, :create)
      put("/users/:id", UserController, :update)
      delete("/users/:id", UserController, :delete)

      # Working Time routes
      get("/workingtime/:userID", WorkingTimeController, :index)
      get("/workingtime/:userID/:id", WorkingTimeController, :show)
      post("/workingtime/:userID", WorkingTimeController, :create)
      put("/workingtime/:id", WorkingTimeController, :update)
      delete("/workingtime/:id", WorkingTimeController, :delete)

      # Clocking routes
      get("/clocks/:userID", ClockController, :index)
      post("/clocks/:userID", ClockController, :create)
    end
  end
end
