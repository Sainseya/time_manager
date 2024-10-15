defmodule Time_manager.WorkingTimesFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Time_manager.WorkingTimes` context.
  """

  @doc """
  Generate a working_time.
  """
  def working_time_fixture(attrs \\ %{}) do
    {:ok, working_time} =
      attrs
      |> Enum.into(%{
        end: ~N[2024-10-06 17:25:00],
        start: ~N[2024-10-06 17:25:00]
      })
      |> Time_manager.WorkingTimes.create_working_time()

    working_time
  end
end
