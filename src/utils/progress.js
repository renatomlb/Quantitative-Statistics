const KEY = 'qs_progress';

export function loadVisited() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function saveVisited(visited) {
  localStorage.setItem(KEY, JSON.stringify([...visited]));
}

export function clearVisited() {
  localStorage.removeItem(KEY);
}

// Returns a flat array of all subsection IDs (including nested children)
export function flattenIds(subsections) {
  const ids = [];
  for (const sub of subsections) {
    ids.push(sub.id);
    if (sub.children) ids.push(...flattenIds(sub.children));
  }
  return ids;
}
