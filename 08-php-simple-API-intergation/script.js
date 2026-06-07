document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("categorySelect");
  const sortSelect = document.getElementById("sortSelect");

  const updateUrl = () => {
    const params = new URLSearchParams();

    const category = categorySelect.value;
    if (category) {
      params.set("category", category);
    }

    const sortValue = sortSelect.value;
    if (sortValue) {
      const [sortBy, sortDir] = sortValue.split("-");
      params.set("sort", sortBy);
      params.set("dir", sortDir);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `?${queryString}` : window.location.pathname;

    window.location.href = newUrl;
  };

  categorySelect.addEventListener("change", updateUrl);
  sortSelect.addEventListener("change", updateUrl);
});
