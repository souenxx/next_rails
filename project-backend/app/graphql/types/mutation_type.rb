module Types
  class MutationType < Types::BaseObject
    field :update_post, Types::PostType, mutation: Mutations::UpdatePost
  end
end
