export function formatCategoryName(category) {
    if (!category) return 'All Products';
  
    return category.split('-')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' & ');
  }