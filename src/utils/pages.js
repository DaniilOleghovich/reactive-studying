export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit); // Using Math.ceil to round up count of pages
}
