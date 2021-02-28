import name from './Feedback';
import App from './App';

test('name is correct',()=>{
    expect(name).toMatchSnapshot();
    
})

test('name are',()=>{
    expect(props.feedback.map(feed => feed.name)).toEqual([
        "Akash",
        "Ankita",
        "Chirag",
        "Pragati",
        "Urvashi",
        "Venkatesh"

    ]);
    
})