import { useEffect, useState } from "react";

const stickyHeaderOffset = 80;

export function useActiveSection<TSectionId extends string>(
	sectionIds: readonly TSectionId[],
	initialSectionId: TSectionId,
	stickyOffset = stickyHeaderOffset
) {
	const [activeSectionId, setActiveSectionId] = useState(initialSectionId);

	useEffect(() => {
		if (typeof IntersectionObserver === "undefined") {
			return undefined;
		}

		const observedEntries = new Map<TSectionId, IntersectionObserverEntry>();
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					observedEntries.set(entry.target.id as TSectionId, entry);
				}

				const currentEntry = [...observedEntries.values()]
					.filter((entry) => entry.isIntersecting)
					.sort((left, right) => {
						const leftDistance = Math.abs(left.boundingClientRect.top - stickyOffset);
						const rightDistance = Math.abs(right.boundingClientRect.top - stickyOffset);

						return leftDistance - rightDistance;
					})[0];

				if (currentEntry) {
					setActiveSectionId(currentEntry.target.id as TSectionId);
				}
			},
			{
				rootMargin: `-${stickyOffset}px 0px -70% 0px`,
				threshold: [0, 0.25, 0.5],
			}
		);

		for (const sectionId of sectionIds) {
			const section = document.getElementById(sectionId);

			if (section) {
				observer.observe(section);
			}
		}

		return () => observer.disconnect();
	}, [sectionIds, stickyOffset]);

	return [activeSectionId, setActiveSectionId] as const;
}
