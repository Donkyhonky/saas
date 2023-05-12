/**
 * @constant
 * @type {string}
 * @description A template for a verification message to be sent to a user. This message is a complete HTML document, 
 *              which includes a 'head' section with a defined CSS class named 'container'. This class is used in the 
 *              'body' of the HTML to style a 'div'. Inside this div, a message is displayed to the user, which includes 
 *              a placeholder for the verification code ({####}). This placeholder is intended to be replaced with an 
 *              actual verification code when the message is sent.
 */

export const verificationMessage = String.raw`
    <html>
    <head>
      <style>
        .container {
          background-color: #f2f2f2;
        }
      </style>
    </head>

    <body>
      <div class="container">
        Your verification code is: {####}
      </div>
    </body>
  </html>
`;
