defmodule Time_manager.ClockingFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Time_manager.Clocking` context.
  """

  @doc """
  Generate a clock.
  """
  def clock_fixture(attrs \\ %{}) do
    {:ok, clock} =
      attrs
      |> Enum.into(%{
        status: true,
        time: ~N[2024-10-06 17:24:00]
      })
      |> Time_manager.Clocking.create_clock()

    clock
  end
end
