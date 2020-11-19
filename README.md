# CS612HW4 Release Note
This is a simple ReactJS SPA exhibition project.

### How to Run
This app is backed with NodeJS and NPM, therefore it is expected for the users to have them installed in their computers. To run, invoke 'npm start' from a terminal or command prompt at the top folder location. 

### Prep
Learning ReactJS was a requirement for this assignment. Usefulness of the given instructional materials was half and half - some of them good, the others maybe. I still regret reading React.org tutorial for the time lost. Fortunately, I was able to suppliment them through research. 

### Design
I wanted to make it simple as possible, since most concerning parts were Main section (multiple entry, shared assets) and Nav section (API polling). In order to connect and share, React Router and .json file were used. 

Also, Fetch was consciously chosen over Axios for processing polling, because using soon-to-be-standard technology seemed to be a generally godd idea.

### Implementation
I was able to implement all but one of the required features, but working with local .json file was more problematic than it should have been. You may have noticed that the pictures in the Main section article listing are broken - that's because <img> src wouldn't let me feed the string value taken from .json array. It is a legit expression but some issue with Webpack prevents it from working (or I was told). I would appreciate advices on this issue or better way of implementing it. 

Another unexpected hard part was obtaining class states after fetching api data. Apprantly the state array would become undefined while updating and if you are constantly ticking it on top of that, it becomes impossible to access or use that state. I had to slice it and dump it to make it stable.

### Afterwords
It was a good exercise and I was finally able to learned about React. I just wish the official documentation was more helpful.
