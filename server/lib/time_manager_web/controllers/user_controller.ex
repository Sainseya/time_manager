defmodule Time_manager.UserController do
  use Time_managerWeb, :controller
  alias Time_manager.Accounts

  # GET /api/users or GET /api/users?email=XXX&username=YYY
  def index(conn, params) do
    case params do
      %{"email" => email, "username" => username} ->
        user = Accounts.get_user_by_email_and_username(email, username)
        json(conn, %{"status" => "success", "data" => user})

      _ ->
        users = Accounts.list_users()
        json(conn, %{"status" => "success", "data" => users})
    end
  end

  # GET /api/users/:userID
  def show(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    json(conn, %{"status" => "success", "data" => user})
  end

  # POST /api/users
  def create(conn, %{"user" => user_params}) do
    case Accounts.create_user(user_params) do
      {:ok, _} ->
        data = %{"message" => "user add succesfully"}
        json(conn,data)
      {:error, changeset} ->
        conn |> put_status(:unprocessable_entity) |> render("error.json", changeset: changeset)
    end
  end

  # PUT /api/users/:userID
  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)
    json(conn, %{"status" => "success"})

    case Accounts.update_user(user, user_params) do
      {:ok, _} ->
        data = %{"message" => "User update succesfully"}
        json(conn,data)
      {:error, changeset} ->
        conn |> put_status(:unprocessable_entity) |> render("error.json", changeset: changeset)
    end
  end

  # DELETE /api/users/:userID
  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    json(conn, %{"status" => "success"})

    case Accounts.delete_user(user) do
      {:ok, _} ->
        data = %{"message" => "User delete succesfully"}
        json(conn,data)
      {:error, changeset} ->
        conn |> put_status(:unprocessable_entity) |> render("error.json", changeset: changeset)
    end
  end
end
