const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const videoComments = document.querySelector(".video__comments ul");
const deleteBtn = document.querySelectorAll(".delete__btn");



const addComment = (text, id) => {
    const videoComments = document.querySelector(".video__comments ul");
    const newComment = document.createElement("li");
    newComment.dataset.id = id;
    newComment.className = "video__comment";
    const icon = document.createElement("i");
    icon.className = "fas fa-comment";
    const span = document.createElement("span");
    span.innerText = ` ${text}`;
    const span2 = document.createElement("span");
    span2.className = "delete-btn";
    span2.innerText = "❌";
    newComment.appendChild(icon);
    newComment.appendChild(span);
    newComment.appendChild(span2);
    videoComments.prepend(newComment);
    deleteBtn.forEach((btn) => btn.addEventListener("click", deleteComment));
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text.trim() === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
  });
  textarea.value = "";
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const deleteComment = async (event) => {
    event.preventDefault();
    const comment = event.target.parentElement;
  
    const {
      dataset: { id },
    } = comment;
  
    const videoId = videoContainer.dataset.id;
    const response = await fetch(`/api/videos/${videoId}/comment/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ commentId: id }),
    });
  
    if (response.status === 200) {
      comment.remove();
    }
  };

if (form) {
    form.addEventListener("submit", handleSubmit);
}

if (deleteBtn) {
    deleteBtn.forEach((btn) => btn.addEventListener("click", deleteComment));
}