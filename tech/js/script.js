var validationRules = {
  clinic: {
    identifier: 'clinic',
    rules: [
      {
        type: 'empty',
        prompt: 'Please select a clinic'
      }
    ]
  }
};

$(function() {
  $('.ui.form').form({
    fields: {
      clinic: 'empty',
    },
    inline : true
  });
});



new Vue({
  el: '#vueApp',
  data: {
    debug: false,
    button_feedback: false,
    clinic_id: 0,
    doctor_id: 0,
    clinics: [{
      "id": "1",
      "name": "Clergy Street Family Physicians",
      "address": "71 Clergy St. East Kingston, ON, K7L 3J3",
      "phone": "613-542-7858"
    }, {
      "name": "Maple Centre Health Clinic",
      "address": "1036 Princess St., Unit D2 Kingston, ON, K7L 1H2",
      "phone": "613-546-9721",
      "id": "2"
    }, {
      "name": "Maple Family Health Team",
      "address": "1036 Princess St., Unit D2 Kingston, ON, K7L 1H2",
      "phone": "613-531-5888",
      "id": "3"
    }, {
      "name": "Reddendale Family Health Centre",
      "address": "125 Lakeview Avenue Kingston, ON, K7M 3T6",
      "phone": "613-384-4664",
      "id": "4"
    }, {
      "name": "Oak Tree Family Health Centre",
      "address": "730 Front Road, Unit 7 Kingston, ON, K7M 6P7",
      "phone": "613-384-7640",
      "id": "5"
    }, {
      "name": "Rideau Family Medical Centre",
      "address": "235 Gore Road, Unit 13 Kingston , ON, K7L 0C3",
      "phone": "613-546-0151",
      "id": "6"
    }, {
      "name": "Willow Family Physicians",
      "address": "325 University Ave Kingston, ON, K7L 3R4",
      "phone": "613-544-2902",
      "id": "7"
    }],
    doctors: [{
      "id": "1",
      "name": "Dr. Alyson Biedermann",
      "clinic_id": "7"
    }, {
      "id": "2",
      "name": "Ms. Jill Burkholder NP-PHC",
      "clinic_id": "7"
    }, {
      "id": "3",
      "name": "Dr. Veronica Mohr",
      "clinic_id": "7"
    }, {
      "id": "4",
      "name": "Dr. Joanne Nicholson",
      "clinic_id": "7"
    }, {
      "id": "5",
      "name": "Dr. Patricia O'Donnell",
      "clinic_id": "7"
    }, {
      "id": "6",
      "name": "Dr. Nancy Overington",
      "clinic_id": "7"
    }, {
      "id": "7",
      "name": "Dr. Whitney Smith",
      "clinic_id": "7"
    }, {
      "id": "8",
      "name": "Dr. Tag Danforth",
      "clinic_id": "1"
    }, {
      "id": "9",
      "name": "Ms. Marie-Claude Goyer NP-PHC",
      "clinic_id": "1"
    }, {
      "id": "10",
      "name": "Dr. Elizabeth Lawrence",
      "clinic_id": "1"
    }, {
      "id": "11",
      "name": "Dr. Darren Lett",
      "clinic_id": "1"
    }, {
      "id": "12",
      "name": "Dr. Ross McIlquham",
      "clinic_id": "1"
    }]
  },
  computed: {
    filteredDoctors: function() {
      var doctors = {};
      var idx = 1;
      
      doctors[0] = {"name": "Doctor", "id" : 0};
      this.doctor_id = 0;

      for (i = 0; i <= this.doctors.length - 1; i++) {
        if (this.doctors[i].clinic_id == this.clinic_id) {
          doctors[idx] = this.doctors[i];

          idx++;
        }
      }

      return doctors;
    },
    doctor: function() {
      if (this.doctor_id == 0) {
        return '';
      } else {
        for (i = 0; i <= this.doctors.length; i++) {
          if (this.doctors[i].id == this.doctor_id) {
            return this.doctors[i];
          }
        }
      }
    },
    clinic: function() {
      if (this.clinic_id == 0) {
        return '';
      } else {
        for (i = 0; i <= this.clinics.length; i++) {
          if (this.clinics[i].id == this.clinic_id) {
            return this.clinics[i];
          }
        }
      }
    }
  },
  methods: {
    sendFeedback: function(event) {
      this.button_feedback = true;
      
      Vue.nextTick(function() {
        $('#sendingButton').transition('bounce');
      });
    }
  }
});