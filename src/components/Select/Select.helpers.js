import React from 'react';

export function getDisplayedValue(value, children) {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(
    (child) => child.props.value === value
  );

  return selectedChild.props.children;
}

export function resizeSelect(sel) {
  let tempSelect = document.createElement('select');
  let tempOption = document.createElement('option');

  // Replicate important styling.
  tempOption.textContent = sel.options[sel.selectedIndex].text;
  const padding = window.getComputedStyle(sel).getPropertyValue('padding');
  const height = window.getComputedStyle(sel).getPropertyValue('height');
  tempSelect.style.cssText += `
      visibility: hidden;
      position: fixed;
      padding: ${padding};
      height: ${height};
      `;
  tempSelect.appendChild(tempOption);
  sel.after(tempSelect);
  
  const tempSelectWidth = tempSelect.getBoundingClientRect().width;
  sel.style.width = `${tempSelectWidth}px`;
  tempSelect.remove();
}

