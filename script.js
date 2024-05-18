const inputbox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask()
{
    if(inputbox.value==='')
        {
            alert("enter anything");
        }
        else
        {
            let li=document.createElement("li");
            li.innerHTML=inputbox.value;
            listContainer.appendChild(li);          //add the value in the input text field into the list(ul)

            let cross=document.createElement("cross");
            cross.innerHTML="\u00d7";   //cross html value
            li.appendChild(cross);                      //add cross to the end of list value
        }
        inputbox.value="";
        saveData();
}

//the parent i.e list value consist 2 childs-li(text and image is added for each)and cross
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")                                                    //element name capitalized
    {
        e.target.classList.toggle("checked");
        saveData();
    }                             
    else if(e.target.tagName==="CROSS")
        {
            e.target.parentElement.remove();              //remove the list
            saveData();
        }
}
)


function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML); //the data in the list is saved
}

function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");        //to show the previous state itself on re-opening
}

showTask();