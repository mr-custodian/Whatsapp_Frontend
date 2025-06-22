export function formatChatTime(isoTime) {
  const msgDate = new Date(isoTime);
  const now = new Date();

  const isSameDay =
    msgDate.getDate() === now.getDate() &&
    msgDate.getMonth() === now.getMonth() &&
    msgDate.getFullYear() === now.getFullYear();

  const isYesterday = (() => {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    return (
      msgDate.getDate() === yesterday.getDate() &&
      msgDate.getMonth() === yesterday.getMonth() &&
      msgDate.getFullYear() === yesterday.getFullYear()
    );
  })();

  if (isSameDay) {
    return msgDate.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  } else if (isYesterday) {
    return "Yesterday";
  } else {
    return msgDate.toLocaleDateString("en-GB").split("/").join("/");
  }
}
