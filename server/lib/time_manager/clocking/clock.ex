defmodule Time_manager.Clocking.Clock do
  @derive {Jason.Encoder, only: [:id, :status, :time, :user_id, :inserted_at, :updated_at]}  # Specify fields to encode
  use Ecto.Schema
  import Ecto.Changeset

  schema "clocks" do
    field :status, :boolean, default: false
    field :time, :naive_datetime
    belongs_to :user, Time_manager.Accounts.User
    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(clock, attrs) do
    clock
    |> cast(attrs, [:time, :status])
    |> validate_required([:time, :status])
    |> foreign_key_constraint(:user_id)
  end

end
