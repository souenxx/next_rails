module Queries
  class PostsQuery < Queries::BaseQuery
    type [Types::PostType], null: false

    def resolve
      Post.limit(50)
    end
  end
end