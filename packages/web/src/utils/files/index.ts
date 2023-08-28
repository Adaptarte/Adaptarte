const downloadFile = (url: string, filename: string): void => {
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = url;
  link.download = filename;
  link.click();
  document.body.removeChild(link);
};

const saveJson = async (data: object): Promise<void> => {
  const json = JSON.stringify(data);
  let type = "application/json;charset=utf-8;";
  const blob = new Blob([json], { type });
  const url = URL.createObjectURL(blob);
  downloadFile(url, "AdaptarteDB.json");
  URL.revokeObjectURL(url);
};

export { downloadFile, saveJson };
