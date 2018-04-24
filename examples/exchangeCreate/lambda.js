// Copyright 2018 Solutions Alveo Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

exports.handler = function (event, context, callback) {

  /**
   * We would typically call an external service or run
   * custom logic to generate a new exchange. Here, to 
   * simplify the example, we will simply create a fake
   * static gift card. 
   */
  const sampleExchangeObject = {
    // Structure to be announced
  };

  /**
   * Once the exchange is generated, we return the gift
   * card object to the Return Magic platform. Make sure to
   * pass the response object as the second parameter, since
   * the first parameter would be an error object (see docs
   * for more details).
   */
  callback(null, {
    exchange: sampleExchangeObject,
  });
};