# Log-Event-Backend
Simple log event to track user's events

<h3>Use routes</h3>
<ul>
<li>GET localhost:8001/events to see all the events</li>
<li>GET localhost:8001/events/:event_id to see all the events by id</li>
<li>POST localhost:8001/events/create to save a new event</li>
</ul>
<br>
<h3>Save event</h3>
To save an event use the next body params:
 <ul>
    <li>event_id</li>
    <li>target</li>
    <li>user_id</li>
 </ul>
 <h4>Example</h4>
 <strong>Product Impression example</strong> <br>
 {<br>
  event_id: "product_impression",<br>
  target: product_id,<br>
  user_id: user_id //only numbers<br>
 }
 <br><br>
 or
 <br><br>
 <strong>A/B testing example</strong> <br>
 {<br>
  event_id: "testing_button",<br>
  target: "A button",<br>
  user_id: user_id //only numbers<br>
 }<br><br>
 {<br>
  event_id: "testing_button",<br>
  target: "B button",<br>
  user_id: user_id //only numbers<br>
 }
