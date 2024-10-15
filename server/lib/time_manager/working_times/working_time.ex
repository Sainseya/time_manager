defmodule Time_manager.WorkingTimes.WorkingTime do
  @derive {Jason.Encoder, only: [:id, :start, :end, :inserted_at, :updated_at]}
  use Ecto.Schema
  import Ecto.Changeset

  schema "working_times" do
    field :start, :naive_datetime
    field :end, :naive_datetime

    belongs_to :user, Time_manager.Accounts.User

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(working_time, attrs) do
    working_time
    |> cast(attrs, [:start, :end])
    |> validate_required([:start, :end])
  end
end
