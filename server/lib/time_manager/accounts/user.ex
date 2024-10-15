defmodule Time_manager.Accounts.User do
  @derive {Jason.Encoder, only: [:id, :username, :email, :inserted_at, :updated_at]}
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :username, :string
    field :email, :string

    has_many :clocks, Time_manager.Clocking.Clock
    has_many :working_times, Time_manager.WorkingTimes.WorkingTime

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email])
    |> validate_required([:username, :email])
    |> unique_constraint(:email, message: "This email is already taken")
    |> unique_constraint(:username, message: "This username is already taken")
  end
end