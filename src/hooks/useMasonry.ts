import { useEffect, useRef, useCallback } from 'react';

export const useMasonry = (
  columnCount: { mobile: number; tablet: number; desktop: number },
  gap: number = 24
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateLayout = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const items = Array.from(container.children) as HTMLElement[];
    
    if (items.length === 0) return;
    
    // Calculate columns based on viewport
    const width = container.offsetWidth;
    let columns = columnCount.mobile;
    
    if (window.innerWidth >= 1024) {
      columns = columnCount.desktop;
    } else if (window.innerWidth >= 768) {
      columns = columnCount.tablet;
    }
    
    const columnWidth = (width - gap * (columns - 1)) / columns;
    const columnHeights = new Array(columns).fill(0);
    
    items.forEach((item) => {
      // Find shortest column
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      
      // Position item
      item.style.width = `${columnWidth}px`;
      item.style.left = `${shortestColumn * (columnWidth + gap)}px`;
      item.style.top = `${columnHeights[shortestColumn]}px`;
      
      // Update column height
      const itemHeight = item.offsetHeight;
      columnHeights[shortestColumn] += itemHeight + gap;
    });
    
    // Set container height
    container.style.height = `${Math.max(...columnHeights) - gap}px`;
  }, [columnCount, gap]);

  useEffect(() => {
    // Initial layout calculation
    const timeoutId = setTimeout(calculateLayout, 100);

    // Setup resize observer
    const resizeObserver = new ResizeObserver(() => {
      calculateLayout();
    });

    // Setup mutation observer for dynamic content
    const mutationObserver = new MutationObserver(() => {
      calculateLayout();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      mutationObserver.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
      
      // Observe all children
      const items = Array.from(containerRef.current.children) as HTMLElement[];
      items.forEach(item => resizeObserver.observe(item));
    }

    // Recalculate on window resize
    window.addEventListener('resize', calculateLayout);

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('resize', calculateLayout);
    };
  }, [calculateLayout]);

  return containerRef;
};