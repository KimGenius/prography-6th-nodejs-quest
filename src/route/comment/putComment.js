'use strict'
import Comment from '../../models/comment'

module.exports = async (req, res) => {
  const {todoId, commentId} = req.params
  const {contents} = req.body
  let result = await Comment.findOneAndUpdate({
    id: commentId,
    todoId
  }, {contents}, {new: true})
  if (!result) return res.status(404).send()
  result = result.toObject()
  return res.json(result)
}