defmodule Time_manager.AccountsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Time_manager.Accounts` context.
  """

  @doc """
  Generate a user.
  """
  def user_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        email: "some email",
        username: "some username"
      })
      |> Time_manager.Accounts.create_user()

    user
  end
end
