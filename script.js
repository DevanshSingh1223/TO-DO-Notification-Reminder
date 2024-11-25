document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
  
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const title = document.getElementById("task-title").value;
      const desc = document.getElementById("task-desc").value;
      const time = new Date(document.getElementById("task-time").value);
  
      if (title && time) {
        const taskId = Date.now();
        const now = new Date();
  
        const timeDiff = time - now - 5 * 60 * 1000; // 5 minutes before the task
        if (timeDiff > 0) {
          setTimeout(() => {
            alert(`Reminder: ${title}\n${desc}`);
          }, timeDiff);
        }
  
        const taskItem = document.createElement("li");
        taskItem.textContent = `${title} - ${time.toLocaleString()}`;
        taskList.appendChild(taskItem);
  
        taskForm.reset();
      }
    });
  });
  