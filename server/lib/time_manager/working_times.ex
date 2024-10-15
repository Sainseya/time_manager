defmodule Time_manager.WorkingTimes do
  @moduledoc """
  The WorkingTimes context.
  """

  import Ecto.Query, warn: false
  alias Time_manager.Repo

  alias Time_manager.WorkingTimes.WorkingTime

  @doc """
  Returns the list of working_times.

  ## Examples

      iex> list_working_times()
      [%WorkingTime{}, ...]

  """
  def list_working_times(user_id, start_time, end_time) do
    from(w in WorkingTime,
      where: w.user_id == ^user_id and w.start >= ^start_time and w.end <= ^end_time
    )
    |> Repo.all()
  end

  @doc """
  Gets a single working_time.

  Raises `Ecto.NoResultsError` if the Working time does not exist.

  ## Examples

      iex> get_working_time!(123)
      %WorkingTime{}

      iex> get_working_time!(456)
      ** (Ecto.NoResultsError)

  """
  def get_working_time!(user_id, id) do
    Repo.get_by!(WorkingTime, user_id: user_id, id: id)
  end

  def get_working_time_by_id(id) do
    case Repo.get(WorkingTime, id) do
      nil -> {:error, "Working time not found"}
      working_time -> {:ok, working_time}
    end
  end


  def get_working_time_by_user_id(user_id) do
    from(wt in WorkingTime, where: wt.user_id == ^user_id)
    |> Repo.all()
  end


  @doc """
  Creates a working_time.

  ## Examples

      iex> create_working_time(%{field: value})
      {:ok, %WorkingTime{}}

      iex> create_working_time(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_working_time(user_id, attrs \\ %{}) do
    %WorkingTime{user_id: user_id}
    |> WorkingTime.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a working_time.

  ## Examples

      iex> update_working_time(working_time, %{field: new_value})
      {:ok, %WorkingTime{}}

      iex> update_working_time(working_time, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_working_time(%WorkingTime{} = working_time, attrs) do
    working_time
    |> WorkingTime.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a working_time.

  ## Examples

      iex> delete_working_time(working_time)
      {:ok, %WorkingTime{}}

      iex> delete_working_time(working_time)
      {:error, %Ecto.Changeset{}}

  """
  def delete_working_time(%WorkingTime{} = working_time) do
    Repo.delete(working_time)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking working_time changes.

  ## Examples

      iex> change_working_time(working_time)
      %Ecto.Changeset{data: %WorkingTime{}}

  """
  def change_working_time(%WorkingTime{} = working_time, attrs \\ %{}) do
    WorkingTime.changeset(working_time, attrs)
  end
  
  # Fonction pour créer un working time pour un utilisateur
  def create_working_time!(user_id, attrs \\ %{}) do
    %WorkingTime{user_id: user_id}
    |> WorkingTime.changeset(attrs)
    |> Repo.insert()
  end
end
