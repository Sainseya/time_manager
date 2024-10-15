defmodule Time_manager.ClockController do
  use Time_managerWeb, :controller
  alias Time_manager.Clocking

  def index(conn, %{"userID" => user_id}) do
    clocks = Clocking.list_clocks(user_id)
    json(conn, %{"status" => "success", "data" => clocks})
  end

  def create(conn, %{"userID" => user_id, "clock" => clock_params}) do
    case Clocking.create_clockuser(user_id, clock_params) do
      {:ok, _} ->
        data = %{"message" => "Clock create succesfully"}
        json(conn,data)
      {:error, changeset} ->
        conn |> put_status(:unprocessable_entity) |> render("error.json", changeset: changeset)
    end
  end
end
