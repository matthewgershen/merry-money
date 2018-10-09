json.extract! @company, :id, :symbol, :name
json.isWatched @company.is_watched?(current_user)
