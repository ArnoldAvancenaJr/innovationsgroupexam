// Issues: Close button
//
// When a issue comment field also has a "Close" button, update the icon of the
// button when close menu is toggled between `closed as completed` and `closed as canceled`.
//
import {on} from 'delegated-events'

on(
  'details-menu-selected',
  '.js-sync-select-menu-icon',
  function (event) {
    const completedIcon = document.querySelector<HTMLElement>('.js-sync-select-menu-icon-completed')!
    const canceledIcon = document.querySelector<HTMLElement>('.js-sync-select-menu-icon-canceled')!

    const stateReason = (event.detail.relatedTarget as Element).querySelector<HTMLInputElement>(
      'input[name="state_reason"]'
    )!.value

    if (stateReason === 'completed') {
      completedIcon.style.display = 'inline-block'
      canceledIcon.style.display = 'none'
    } else if (stateReason === 'canceled') {
      completedIcon.style.display = 'none'
      canceledIcon.style.display = 'inline-block'
    }
  },
  {capture: true}
)
