$(document).ready(function() { // Wrap DOM in a Call to JQuery to ensure DOM is 'ready' before launching code
    $(function () { 
        var dateDisplayEl = $('#current-date-display'); // Header date display variable

        function createTimeBlocks() { // Create 8 timeblocks in container-lg
            const now = dayjs();
            const currentHour = now.hour();
            const containerEl = $(".container-lg"); // Div class holding everything
            containerEl.empty();
      
            for (let hour = 9; hour <= 17; hour++) { // Array for 9-5, use military time 24 hrs
                let timeBlockStatus = ""; // To be determined below
                
                if (hour < currentHour) { // Determine past/present/future status'
                    timeBlockStatus = "past";
                } else if (hour === currentHour) {
                    timeBlockStatus = "present";
                } else {
                    timeBlockStatus = "future";
                }
                
                const hourLabel = hour > 12 ? `${hour - 12}PM` : hour === 12 ? `${hour}PM` : `${hour}AM`; // Sets the AM/PM stuff
                const id = `hour-${hour}`; // sets current time for time-block
                let event = getSavedTimeBlock(id); // pull from local storage
      
                // Create the time-blocks with label and events (copied from index.html starter code)
                const timeBlock = `
                <div id="${id}" class="row time-block ${timeBlockStatus}">
                <div class="col-2 col-md-1 hour text-center py-3">${hourLabel}</div>
                <textarea class="col-8 col-md-10 event" rows="3">${event}</textarea>
                <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                    <i class="fas fa-save" aria-hidden="true"></i>
                </button>
                </div>
                `;
                containerEl.append(timeBlock); // Add time-blocks to container
            }
      
            const timeRemaining = 60 - Number(now.minute()); // update timeblocks in REALTIME
            setTimeout(createTimeBlocks, timeRemaining * 1000 * 60);// If a new hour has started, refresh the time blocks
        }

        function onSaveClick(e) { // Save block id & events to LS
            const saveButton = $(this);
            const timeBlockId = saveButton.closest(".time-block").attr("id"); // time-block id
            const event = $.trim(saveButton.siblings("textarea").val()); // get event info
      
            if (event === "") { // If event is empty, delete from local storage
                localStorage.removeItem(timeBlockId);
                return;
            }
      
            const itemToSave = { // Save to local storage using JSON
                event: event,};
            localStorage.setItem(timeBlockId, JSON.stringify(itemToSave));
        };
      
        function getSavedTimeBlock(timeBlockId) { // Get current hour from LS
            const savedItem = localStorage.getItem(timeBlockId);
            return savedItem ? JSON.parse(savedItem).event : ""; // If empty, return empty string, else display event
        }

    function displayDate() { // handle displaying the current date in header
     var rightNow = dayjs().format('dddd, MMMM Do'); // advanced formatting 'Do'
     dateDisplayEl.text(rightNow);
     }

    displayDate(); // show date in header
    createTimeBlocks(); // self explanitory
    $(".saveBtn").on("click", onSaveClick); // save button click action
  });
  console.log("DOM is ready!"); // DOM loaded, safe to run code now
});