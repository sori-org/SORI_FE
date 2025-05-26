export function formatAndSortPosts(data, sortOrder = "desc") {
    if (!data) return [];

    const ordered = [...data].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    const map = new Map();

    const numbered = ordered.map((post) => {
        const dateKey = post.created_at.slice(0, 10);
        const storeKey = post.store_name;
        const key = `${storeKey}-${dateKey}`;

        const count = map.get(key) || 0;
        const newCount = count + 1;
        map.set(key, newCount);

        const date = new Date(post.created_at);
        const dateStr = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

        return {
            ...post,
            numberedTitle: `${dateStr} 게시물 (${newCount})`,
        };
    });

    return [...numbered].sort((a, b) => {
        const aTime = new Date(a.created_at).getTime();
        const bTime = new Date(b.created_at).getTime();
        return sortOrder === "desc" ? bTime - aTime : aTime - bTime;
    });
}
