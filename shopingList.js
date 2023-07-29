function shoppingList (input){
    const listInput = input.shift();
    let list = listInput.split('!');
    let line = input.shift();
    while(line != 'Go Shopping!'){
    
      const command = line.split(' ')[0];

    switch (command){
      case 'Urgent':
        const itemUrgent = line.split(' ')[1];
        if(!list.includes(itemUrgent)){
        list.unshift(itemUrgent);
      }else{
        continue;
      }
        
           break;
        case 'Unnecessary':
          const itemUnnecessary = line.split(' ')[1];
           if(list.includes(itemUnnecessary)){
            list.pop(itemUnnecessary);
           }else{
            continue;
          }
            break;
            case'Correct':
            const oldItem = line.split(' ')[1];
            const newItem = line.split(' ')[2];

            if(list.includes(oldItem)){
             list[list.indexOf(oldItem)] = newItem;
             }else{
              continue;
            }
            break
            case 'Rearrange':
              const itemRearrange = line.split(' ')[1];
              if(list.includes(itemRearrange)){
                list.pop(itemRearrange);
                list.push(itemRearrange);
              }else{
                continue;
              }
                break;
      }
            line=input.shift();
    }
    console.log(list.join(", "));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])