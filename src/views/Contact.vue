<template>
    <div>
      <h1 class="txtFoto">¿Do you want to know more?</h1> 
      <p>If you are interested in knowing more, just fill out the following form.</p>

      <div class="container">
        <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputName">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Name">
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="Email">
              </div>
            </div>
           
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Write here...</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            <p>¿Do you want us to see your work?</p>
            <div class="custom-file">

                <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                <div class="invalid-feedback">Invalid custom file</div>
              </div>
              <br><br>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    Accept privacy policy
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
          <br>
      </div>
   </div>
  </template>

  
  
  <style>

  .txtFoto{
    margin-top:30px;
  }

  </style>
  