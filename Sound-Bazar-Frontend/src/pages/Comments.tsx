import React, { useEffect, useState } from "react";
import { CommentType } from "../@types/types";
import { getComments, addComment } from "../services/cards";
import defaultImage from "../assets/user-regular-new.png";
import { Button } from "flowbite-react";

interface CommentsProps {
    cardId: string;
}

const Comments: React.FC<CommentsProps> = ({ cardId }) => {
    const [comments, setComments] = useState<CommentType[]>([]);
    const [comment, setComment] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchComments(cardId);
    }, [cardId]);

    const fetchComments = async (cardId: string) => {
        try {
            const response = await getComments(cardId);
            const commentsData = response.data;


            if (Array.isArray(commentsData)) {
                setComments(commentsData);
            } else {
                throw new Error("Unexpected data structure");
            }
        } catch (error) {
            setError("Failed to fetch comments.");
            console.error("Failed to fetch comments:", error);
        }
    };

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (cardId && comment) {
            try {
                await addComment(cardId, comment);
                setComment("");
                fetchComments(cardId);
            } catch (error) {
                setError("Failed to add comment.");
                console.error("Failed to add comment:", error);
            }
        }
    };

    return (
        <div>
            <div className="dark:text-white">
                <h3 className="text-l py-0.5 font-bold">Comments:</h3>
                {comments.map((commentItem) => (
                    <div key={commentItem._doc._id} className="border-b border-gray-300 py-2">
                        <div className="flex items-center">
                            {commentItem.user.image ? (
                                <img src={commentItem.user.image.url} alt="User Image" className="w-10 h-10 rounded-full mr-2" />
                            ) : (
                                <img src={defaultImage} alt="Default User" className="w-10 h-10 rounded-full mr-2" />
                            )}
                            <div>
                                {commentItem.user.name ? (
                                    <p className="font-bold">{commentItem.user.name.first}</p>
                                ) : (
                                    <p className="font-bold">No name available</p>
                                )}
                                {commentItem._doc.createdAt && (
                                    <p className="text-xs text-blue-600">{new Date(commentItem._doc.createdAt).toLocaleString()}</p>
                                )}
                            </div>
                        </div>
                        <p className="mt-2">{commentItem._doc.text}</p>
                    </div>
                ))}
            </div>

            <div>
                <form onSubmit={handleCommentSubmit} className="w-80 my-6">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write your comment here..."
                        className="w-full h-28 border rounded-md resize-none mb-4 text-gray-900"
                    />
                    <Button type="submit" gradientDuoTone="purpleToPink">
                        Add Comment
                    </Button>
                </form>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default Comments;
