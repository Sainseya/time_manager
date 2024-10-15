defmodule Time_manager.WorkingTimeController do
  use Time_managerWeb, :controller
  alias Time_manager.WorkingTimes

  def index(conn, %{"userID" => user_id} = params) do
    case Map.has_key?(params, "start") && Map.has_key?(params, "end") do
      true ->
        start_time = params["start"]
        end_time = params["end"]
        working_times = WorkingTimes.list_working_times(user_id, start_time, end_time)
        json(conn, %{"status" => "success", "data" => working_times})
      false ->
        working_times = WorkingTimes.get_working_time_by_user_id(user_id)
        json(conn, %{"status" => "success", "data" => working_times})
    end
  end



  def show(conn, %{"userID" => user_id, "id" => id}) do
    working_time = WorkingTimes.get_working_time!(user_id, id)
    json(conn, %{"status" => "success", "data" => working_time})
  end


  def create(conn, %{"userID" => user_id}) do
    working_time_params = conn.body_params["working_time"]
    user_id = String.to_integer(user_id)
    case WorkingTimes.create_working_time(user_id, working_time_params) do
      {:ok, _} ->
        data = %{"message" => "WorkingTime created successfully"}
        json(conn, data)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(%{errors: changeset})
    end
  end

  def update(conn, %{"id" => id, "working_times" => working_time_params}) do
  working_time = WorkingTimes.get_working_time_by_id(id)

    case WorkingTimes.update_working_time(working_time, working_time_params) do
      {:ok, _} ->
        data = %{"message" => "WorkingTime updated successfully"}
        json(conn, data)

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render("error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    working_time = WorkingTimes.get_working_time_by_id(id)
    {:ok, _} = WorkingTimes.delete_working_time(working_time)
    json(conn, %{"status" => "success", "message" => "WorkingTime deleted successfully"})
  end
end
