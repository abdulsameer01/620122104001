let logs = [];

export function logEvent(message) {
  const timestamp = new Date().toISOString();
  logs.push(`[${timestamp}] ${message}`);
}

export function downloadLogs() {
  const blob = new Blob([logs.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "logs.txt";
  a.click();
  URL.revokeObjectURL(url);
}
